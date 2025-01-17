import { TimelineReader } from './twitter-client';
import { repostRecentTweets } from './twitter-repost';
import NodeCache from 'node-cache';
import fs from 'fs';

const followerCache = new NodeCache({ stdTTL: 1800 }); // Cache for 30 minutes

async function saveFollowersToFile(followers: string[]) {
  fs.writeFileSync('followers.json', JSON.stringify(followers, null, 2));
}

async function loadFollowersFromFile(): Promise<string[]> {
  if (fs.existsSync('followers.json')) {
    const data = fs.readFileSync('followers.json', 'utf-8');
    return JSON.parse(data);
  }
  return [];
}

async function main() {
  const reader = new TimelineReader();

  try {
    // Login using browser cookies
    await reader.login();
    console.log('Successfully logged in to Twitter');

    // Store followers in the JSON file
    let followers = [];
    for await (const follower of reader.scraper.getFollowing('1876424927777292288', 147)) {
      console.log('Follower:', follower.username);
      if (follower.username) {
        followers.push(follower.username);
      }
    }
    await saveFollowersToFile(followers);

    // Load followers from the JSON file
    followers = await loadFollowersFromFile();
    if (followers.length > 0) {
      const randomFollower = followers[Math.floor(Math.random() * followers.length)];
      console.log('Randomly selected user:', randomFollower);

      const latestTweet = await reader.scraper.getLatestTweet(randomFollower);
      if (latestTweet && latestTweet.id) {
        await reader.scraper.likeTweet(latestTweet.id);
        console.log(`Liked latest tweet from @${randomFollower}`);
      }
    } else {
      console.log('No users in JSON file to select from.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

main().catch(console.error);