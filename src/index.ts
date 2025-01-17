import { TimelineReader } from './twitter-client';
import * as readline from 'readline';

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function followUsers() {
  const reader = new TimelineReader();

  try {
    // Login using browser cookies
    await reader.login();
    console.log('Successfully logged in to Twitter');

    // getProfile과 getUserIdByScreenName을 사용하여 로그인 상태 확인
    const profile = await reader.scraper.getProfile('RAIN_AI_Dev');
    const userId = await reader.scraper.getUserIdByScreenName('RAIN_AI_Dev');

    if (!profile || !userId) {
      console.error('Login failed. Please check your cookies or credentials.');
      return;
    }

    console.log('Login successful. Type "yes" to proceed with following users.');
    
    // 사용자 입력을 받기 위한 인터페이스 설정
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('Proceed with following users? (yes/no): ', async (answer) => {
      if (answer.toLowerCase() === 'yes') {
        rl.question('Enter the username to follow: ', async (username) => {
          try {
            const followUserResults = await reader.follow(username);
            if (followUserResults === undefined) {
              console.warn(`No result returned for following ${username}`);
            } else {
              console.log(`Successfully followed ${username}:`, followUserResults);
            }
          } catch (error) {
            console.error(`Failed to follow ${username}:`, error);
          }
          rl.close();
        });
      } else {
        console.log('Operation cancelled.');
        rl.close();
      }
    });

  } catch (error) {
    console.error('Error:', error);
  }
}

followUsers();