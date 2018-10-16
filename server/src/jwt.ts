import * as jwt from 'jsonwebtoken'

export const secret = process.env.JWT_SECRET || '93r023#$we*$#frg*37$8fw3r3'
const ttl = 3600 * 4

interface JwtPayload {
  id: number
}

export const sign = (data: JwtPayload) =>
  jwt.sign(data, secret, { expiresIn: ttl })

export const verify = (token: string): JwtPayload =>
  jwt.verify(token, secret) as JwtPayload
