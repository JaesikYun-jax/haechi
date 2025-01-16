import { Scraper } from 'agent-twitter-client';
import { cookies } from './cookie';

class TimelineReader {
  public scraper: Scraper;

  constructor() {
    this.scraper = new Scraper();
  }

  async login() {
    try {
      await this.scraper.clearCookies();
      await this.scraper.setCookies(cookies);

      const isLoggedIn = await this.scraper.isLoggedIn();
      if (isLoggedIn) {
        console.log('Successfully logged in to Twitter using cookies');
      } else {
        console.log('Failed to log in to Twitter using cookies');
      }
    } catch (error: any) {
      console.error('Error during login:', error);
    }
  }

  async logout() {
    try {
      // 로그아웃 로직을 여기에 추가하세요.
      console.log('Successfully logged out from Twitter');
    } catch (error: any) {
      console.error('Error during logout:', error);
    }
  }

  async getMyProfile() {
    try {
      // 여기에 Twitter API를 사용하여 프로필 정보를 가져오는 로직을 추가하세요.
      const profile = await this.scraper.me();
      console.log('My Profile:', profile);
      return profile;
    } catch (error: any) {
      console.error('Error fetching profile:', error);
    }
  }

  async follow(username: string): Promise<void> {
    try {
      console.log(`Following ${username}...`);
      await this.scraper.followUser(username);
    } catch (error) {
      console.error(`Error following ${username}:`, error);
    }
  }
}

export async function followUsers(usernames: string[]): Promise<void> {
    const client = new TimelineReader();
    for (const username of usernames) {
        try {
            await client.follow(username);
            console.log(`Successfully followed ${username}`);
        } catch (error) {
            console.error(`Failed to follow ${username}:`, error);
        }
    }
}

export { TimelineReader };
