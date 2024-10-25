import { jwtDecode } from "jwt-decode";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb21lIjoicGF5bG9hZCJ9.4twFt5NiznN84AWoo1d7KO1T_yoc0Z6XOpOVswacPZg'
const decoded = jwtDecode(token);

console.log(decoded);

/* prints:
 * { 
 *   foo: "bar",
 *   exp: 1393286893,
 *   iat: 1393268893  
 * }
 */

// decode header by passing in options (useful for when you need `kid` to verify a JWT):
const decodedHeader = jwtDecode(token, { header: true });
console.log(decodedHeader);