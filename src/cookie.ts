import { Scraper } from "agent-twitter-client"


export const cookies = [
  
    "guest_id_marketing=v1%3A173690787793074847; Expires=Fri, 15 Jan 2027 04:15:46 GMT; Max-Age=63072000; Domain=twitter.com; Path=/; Secure; hostOnly=false; aAge=2ms; cAge=1282ms",
    "guest_id_ads=v1%3A173690787793074847; Expires=Fri, 15 Jan 2027 04:15:46 GMT; Max-Age=63072000; Domain=twitter.com; Path=/; Secure; hostOnly=false; aAge=5ms; cAge=1285ms",   
    'personalization_id="v1_JLME4x107Jw1wIoJPnHCow=="; Expires=Fri, 15 Jan 2027 04:15:46 GMT; Max-Age=63072000; Domain=twitter.com; Path=/; Secure; hostOnly=false; aAge=5ms; cAge=1285ms',
    "guest_id=v1%3A173690787793074847; Expires=Fri, 15 Jan 2027 04:15:46 GMT; Max-Age=63072000; Domain=twitter.com; Path=/; Secure; hostOnly=false; aAge=5ms; cAge=1285ms",
    "kdt=YGorNigY5uEDRiVs4TiK9AGUo4iJEGI0qoyNIG3T; Expires=Thu, 16 Jul 2026 04:15:47 GMT; Max-Age=47260800; Domain=twitter.com; Path=/; Secure; HttpOnly; hostOnly=false; aAge=5ms; cAge=178ms", 
    'twid="u%3D1876424927777292288"; Expires=Mon, 14 Jan 2030 04:15:47 GMT; Max-Age=157680000; Domain=twitter.com; Path=/; Secure; hostOnly=false; aAge=5ms; cAge=178ms', 
    "ct0=458d448384162517f8847b1e22fa61b41de1b9e0d10c2996d0f6e271d78b4350951dc2d7f3599ea5a5c87745a3d12f886c5255de8acce2c87cdec135b36dda19032220921133c3da5f7c4337c0af7d3e; Expires=Mon, 14 Jan 2030 04:15:47 GMT; Max-Age=157680000; Domain=twitter.com; Path=/; Secure; SameSite=Lax; hostOnly=false; aAge=5ms; cAge=178ms", 
    "auth_token=b7fb6c91de65732bdcb793ebba1e638329bc89bc; Expires=Mon, 14 Jan 2030 04:15:47 GMT; Max-Age=157680000; Domain=twitter.com; Path=/; Secure; HttpOnly; hostOnly=false; aAge=5ms; cAge=178ms", 
    "att=1-oSaFuqZHYPzYsGI1FrBIZMXAWOnGbGrPqXZ5M7Kp; Expires=Thu, 16 Jan 2025 04:15:47 GMT; Max-Age=86400; Domain=twitter.com; Path=/; Secure; HttpOnly; hostOnly=false; aAge=5ms; cAge=6ms"
  
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

