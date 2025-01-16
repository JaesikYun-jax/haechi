import { TimelineReader } from './twitter-client';

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const reader = new TimelineReader();

  try {
    // Login using browser cookies
    await reader.login();
    console.log('Successfully logged in to Twitter');

    // Get my profile information
    const myProfile = await reader.getMyProfile();
    console.log(`\nFetching recent tweets for @${myProfile?.username}...`);
    
    const usernamesToFollow = ['jasonjzhao','aixbt_agent','AnonVee_','mushy','Edward__Park','Smartecio','Joshyysmartt','ZunXBT','0xfs7','lohith0001','OxTochi','1CryptoMama','zerokn0wledge_','wenxue600','AInvestor_11','mztacat','veratheape','Abrahamchase09','gvofeyii','NDIDI_GRAM','CryptoH0lly','baeko_02','BroLeonAus','0xZorz','BharatWormie','delozix','nygelbygel','ZF_lab','0xProfessorJo','0xNairolf','thebryanjun','sc0tt_ty','ICat4you','luna_virtuals','bagbekoff','0xStephen_','0xMoei','EJseong95','havelaw11','Crypto_He','tyw1984','ShanQuesq','rainerft_','zacxbt','blocki9020','RedactedRes','ix_wilson','ayyyeandy','BenjaminOnIP','oldman_cek','jeansonlau63972','Guomin184935','Airdrop_Guard','ttalgimanju','mylove8754','soyoung__ee','jacobmtucker','grahamfergs','storysylee','miraflores0327','defi_mochi','whip_queen_','teddi_speaks','shadowmakerxyz','anstapnever','agirlonchain','mdzzi','0xFastLife','resaang','Yurii_Weeklang','devrelius','73lV_','tessWeb3','0x_angell','nftboi_','Smith_creator','lokithebird','Hidayahhtaufik','CipherResearchx','Jaseke_','TOK_RICH','rice_bean_','timtimtim_eth','coinboy717','WY_mask','0xchasechang','kim_web3','Yokozuna77','mrjoiscool','r2Jamong','Okpara081','lightningseekr','WeileiY','khouuba','timon_nick','Thales_ai','superfly_5104','LilyHoang210','Gogogonum','sanyi_eth']; // 여기에 팔로우할 사용자 이름을 추가하세요.

    for (const username of usernamesToFollow) {
      try {
        const followUserResults = await reader.scraper.followUser(username);
        if (followUserResults === undefined) {
          console.warn(`No result returned for following ${username}`);
        } else {
          console.log(`Successfully followed ${username}:`, followUserResults);
        }
      } catch (error) {
        console.error(`Failed to follow ${username}:`, error);
      }
      // 3초에서 4초 사이의 랜덤한 지연 추가
      const delayTime = Math.floor(Math.random() * 1000) + 3000;
      await delay(delayTime);
    }

    // Get my recent tweets
    // const tweets = await reader.getTweets(myProfile.screen_name, 3);
    
    // console.log('\nMy Recent Tweets:');
    // for await (const tweet of tweets) {
    //   const formatted = reader.formatTweet(tweet);
    //   console.log('\n' + '-'.repeat(80));
    //   console.log(`[${formatted.created_at.toLocaleString()}]`);
    //   console.log(`${formatted.text}`);
      
    //   if (formatted.media?.length > 0) {
    //     console.log('\nMedia URLs:');
    //     formatted.media.forEach((media: any) => console.log(`- ${media.media_url_https}`));
    //   }
      
    //   console.log(`\nLikes: ${formatted.favorite_count}, Retweets: ${formatted.retweet_count}`);
    // }

    // // Logout when done
    // await reader.logout();

  } catch (error) {
    console.error('Error:', error);
    try {
      await reader.logout();
    } catch (logoutError) {
      console.error('Error during logout:', logoutError);
    }
  }
}

main();