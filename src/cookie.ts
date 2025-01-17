import { Scraper } from "agent-twitter-client"


export const cookies = [
  
    "guest_id_marketing=v1%3A173690787793074847; Expires=Fri, 15 Jan 2027 04:15:46 GMT; Max-Age=63072000; Domain=twitter.com; Path=/; Secure; hostOnly=false; aAge=2ms; cAge=1282ms",
    "guest_id_ads=v1%3A173690787793074847; Expires=Fri, 15 Jan 2027 04:15:46 GMT; Max-Age=63072000; Domain=twitter.com; Path=/; Secure; hostOnly=false; aAge=5ms; cAge=1285ms",   
    'personalization_id="v1_JLME4x107Jw1wIoJPnHCow=="; Expires=Fri, 15 Jan 2027 04:15:46 GMT; Max-Age=63072000; Domain=twitter.com; Path=/; Secure; hostOnly=false; aAge=5ms; cAge=1285ms',
    "guest_id=v1%3A173690787793074847; Expires=Fri, 15 Jan 2027 04:15:46 GMT; Max-Age=63072000; Domain=twitter.com; Path=/; Secure; hostOnly=false; aAge=5ms; cAge=1285ms",
    "kdt=YGorNigY5uEDRiVs4TiK9AGUo4iJEGI0qoyNIG3T; Expires=Thu, 16 Jul 2026 04:15:47 GMT; Max-Age=47260800; Domain=twitter.com; Path=/; Secure; HttpOnly; hostOnly=false; aAge=5ms; cAge=178ms", 
    'twid="u%3D1876424927777292288"; Expires=Mon, 14 Jan 2030 04:15:47 GMT; Max-Age=157680000; Domain=twitter.com; Path=/; Secure; hostOnly=false; aAge=5ms; cAge=178ms', 
    "ct0=c4504f973d8703a9b9adee35c26cb1fd9fd50b36397c3c1c4c99aa012684785a74ce55f6a60c6ea3e15b05e9aa9621082fc5d2189c0cc5b7f0b421ca491a46aaeae8ecc7f1e9c7a6d1f92a419788033b; Expires=Mon, 14 Jan 2030 04:15:47 GMT; Max-Age=157680000; Domain=twitter.com; Path=/; Secure; SameSite=Lax; hostOnly=false; aAge=5ms; cAge=178ms", 
    "auth_token=81390b3a0247c428d7e5fc9ec5aca73d4d58b6e3; Expires=Mon, 14 Jan 2030 04:15:47 GMT; Max-Age=157680000; Domain=twitter.com; Path=/; Secure; HttpOnly; hostOnly=false; aAge=5ms; cAge=178ms", 
    "att=1-7KCHComIySU2CiTztfb0uUPoSe5vJlW3AoxUCBAK; Expires=Thu, 16 Jan 2025 04:15:47 GMT; Max-Age=86400; Domain=twitter.com; Path=/; Secure; HttpOnly; hostOnly=false; aAge=5ms; cAge=6ms"
  
]

// async function main() {
//   const scraper = new Scraper()
//   await scraper.setCookies(cookies)
//     // const newCookies = await scraper.getCookies()
//     // console.log(newCookies)
//     // console.dir(newCookies, { depth: null })
//     // console.log(JSON.stringify(newCookies, null, 2))
//   const timeline = await scraper.fetchHomeTimeline(10, [])
//  // console.log(JSON.stringify(timeline, null, 2))
// }

// main().catch(console.error)

