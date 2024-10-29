// 서버 측 구글 소셜로그인 작업
// 토큰 검증 로직 리팩토링

import axios from 'axios';
import * as jose from 'jose';

export const verifyGoogleIdtoken = async (idToken: string) => {
  try {
    const dh = jose.decodeProtectedHeader(idToken); // 변수명이 구체적이지 불명확한 것 같다.
    const kid = dh.kid?.toLowerCase(); // kid의 검증
    throwMsgError(!kid, 'system error', { message: 'jwt decode error' });
    const gCertsRes = await axios.get(
      `https://www.googleapis.com/oauth2/v3/certs`
    ); // 캐싱하여 과도한 요청 방지
    const gData = gCertsRes.data;
    const gKid: any[] = [];
    if (gData) {
      gKid.push(gData.keys[0].kid);
      gKid.push(gData.keys[1].kid);
    }
    throwMsgError(gKid.length == 0, 'system error', { message: 'no kid data' });
    if (gKid.includes(kid)) {
      logger.info('Google OAuth Success');
      return true;
    } else {
      logger.info('Google OAuth Failed:::'); // 실패시에는 error을 사용하여 더 명확히 전달
      return false;
    }
  } catch (error) {
    logger.info('Google OAuth Failed:::', error);
    return false;
  }
};

// 리팩토링
type GoogleCertKey = {
  kid: string;
  [key: string]: any;
};

const cache = { certs: null as GoogleCertKey[] | null, expiry: 0 };

export const verifyGoogleIdtoken2 = async (idToken: string) => {
  try {
    const { kid } = jose.decodeProtectedHeader(idToken);
    if (!kid) throw new Error('Invalid ID Token: Missing "kid"');

    if (!cache.certs || cache.expiry < Date.now()) {
      const response = await axios.get<{ keys: GoogleCertKey[] }>(
        'https://www.googleapis.com/oauth2/v3/certs'
      );
      cache.certs = response.data.keys;
      cache.expiry = Date.now() + 1000 * 60 * 10;
    }
    if (cache.certs !== null) {
      const kidList = cache.certs.map(cert => cert.kid);
      if (!kidList.includes(kid))
        throw new Error('Invalid ID Token: Unrecognized "kid"');

      const key = cache.certs.find(cert => cert.kid === kid);
      const verifiedToken = await jose.jwtVerify(idToken, jose.JWK.asKey(key!));
      console.info('Google OAuth Success:', verifiedToken.payload);
      return verifiedToken.payload;
    }
  } catch {
    console.error('Google OAuth Verification Failed:', error);
    return false;
  }
};

// 개선점
// 1. GoogleCertKey 타입을 정의하여 사용
// 2. gKid 배열 대신에 kidList 배열 생성

// cache는 redis에 유효시간(TTL)을 걸어 저장해두고 캐싱된 키의 유효성을 판단해서 사용.
// 위의 리팩토링 코드는 완전히 검증되어진 코드는 아니므로 추후 구글 소셜로그인 서버 측 작업을 할때 참고해서 사용하면 좋을 것 같다.
