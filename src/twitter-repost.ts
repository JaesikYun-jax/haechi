import { Scraper } from 'agent-twitter-client';
import { cookies } from './cookie';
//import NodeCache from 'node-cache';
//import { DateTime } from 'luxon';

// Create a cache instance
// const tweetCache = new NodeCache({ stdTTL: 1800 }); // Cache for 30 minutes

class TwitterReposter {
  public scraper: Scraper;

  constructor() {
    this.scraper = new Scraper();
  }


  async scrapeRecentTweets() {
    try {
      console.log('Starting to scrape recent tweets...');
    //  for await (const follower of this.scraper.getFollowing('1876424927777292288', 10)) {
    //     console.log(`Processing follower: ${follower.username}`);
    //     if (follower && follower.username) {
    //       try {
    //         const latestTweet = await this.scraper.getLatestTweet(follower.username);
    //         console.log(`Fetched latest tweet for @${follower.username}`);
    //         if (latestTweet && latestTweet.id) {
    //           console.log(`Recent tweet from @${follower.username}: ${latestTweet.text}`);
    //           await this.scraper.likeTweet(latestTweet.id); // Like the tweet
    //           console.log(`Liked tweet ID: ${latestTweet.id}`);
    //         }
    //       } catch (error) {
    //         console.error(`Error fetching latest tweet for @${follower.username}:`, error);
    //         // Commenting out the problematic code
    //         continue;
    //       }
    //     }
    //   }
    } catch (error) {
      console.error('Error scraping recent tweets:', error);
    }
  }
}

//   async repostTweet(tweetId: string) {
//     try {
//       await this.scraper.retweet(tweetId);
//       console.log(`Successfully reposted tweet ID: ${tweetId}`);
//     } catch (error) {
//       console.error('Error reposting tweet:', error);
//     }
//   }

//   async cacheFollowerUsernames() {
//     try {
//       for await (const follower of this.scraper.getFollowing('1876424927777292288', 100)) {
//         if (follower && follower.username) {
//           tweetCache.set(follower.username, true); // Cache the username
//           console.log(`Cached follower username: ${follower.username}`);
//         }
//       }
//     } catch (error) {
//       console.error('Error caching follower usernames:', error);
//     }
//   }


export async function repostRecentTweets() {
  const reposter = new TwitterReposter();
//   await reposter.login();
  await reposter.scrapeRecentTweets();
} 