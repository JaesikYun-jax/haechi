import { Scraper } from 'agent-twitter-client';
import { cookies } from './cookie';

class TimelineReader {
  public scraper: Scraper;

  constructor() {
    this.scraper = new Scraper();
  }

  async login() {
    try {
      await this.scraper.setCookies(cookies);

      // console.log('Cookies set:', await this.scraper.getCookies());

    //   const profile = await this.getMyProfile();
    //   if (profile) {
    //     console.log('Successfully logged in to Twitter using cookies');
    //   } else {
    //     console.log('Failed to log in to Twitter using cookies');
    //   }
    } catch (error: any) {
      console.error('Error during login:', error);
  
    }
  }

  async getMyProfile() {
    try {
      const profile = await this.scraper.me();
   //   console.log('My Profile:', profile);
      return profile;
    } catch (error: any) {
      console.error('Error fetching profile:', error);
    }
  }

  async follow(username: string): Promise<void> {
    try {
      await this.scraper.followUser(username);
      console.log(`Successfully followed ${username}`);
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
