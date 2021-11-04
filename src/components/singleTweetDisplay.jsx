import React from 'react';

function SingleTweet({ tweets }) {
  return (
    tweets && (
      <div>
        <img src={tweets.includes.media[0].url} alt={tweets.data[0].text}></img>
        <ul>
          <li>{tweets.includes.users[0].name}</li>
          <li>{tweets.data[0].text}</li>
        </ul>
      </div>
    )
  );
}

export default SingleTweet;

/*
{
    "data": [
        {
            "text": "The ‘upshot’: Photographer captures the stunning peak of a meteor shower\nhttps://t.co/HxfwPkWkOS @goodnewsnetwork @PerseidsProject @swifttuttle1 @NatGeoPhotos @photographmag @dailycamera https://t.co/AgcvPfZCXo",
            "id": "1455595182536200196",
            "lang": "en",
            "attachments": {
                "media_keys": [
                    "3_1455595174848049163"
                ]
            },
            "author_id": "93952409"
        },
        {
            "text": "#SpreadPositivity \n\nTurning incarceration into 'restorative justice.' This allows inmates minds and hearts to be engaged while letting them feel useful. Now they're sewing quilts for foster care children.\n\nhttps://t.co/1IAEbUF6K3 @goodnewsnetwork #mindfulness #aftermathcares https://t.co/gErAS8edcP",
            "id": "1455593304960217094",
            "lang": "en",
            "attachments": {
                "media_keys": [
                    "3_1455593301390790658"
                ]
            },
            "author_id": " "
        },
        {
            "text": "Free, Full Text: https://t.co/Uk56A4u8H1 Attn: @robbwolf @SustainableDish @REGENETARIANISM @ShawnBakerMD @shashiiyengar @Travis_Statham @Mangan150 @Grimhood @BenBikmanPhD @LowCarbVet @lowcarbGP @livinlowcarbman @DiscoStew66 @TuitNutrition @ProfTimNoakes @dlifein @goodnewsnetwork https://t.co/u5DcbTPm34 https://t.co/9QOvbowmb1",
            "id": "1455320752765353984",
            "lang": "en",
            "attachments": {
                "media_keys": [
                    "3_1455320045735665664"
                ]
            },
            "author_id": "29775575"
        },
        {
            "text": "RT @favorbuddy: Kindness begins with the understanding that we all struggle.\n.\n#Repost @goodnewsnetwork with @make_repost\n・・・\nPrison Inmate…",
            "id": "1455084815548571648",
            "lang": "en",
            "author_id": "915249063133622273"
        },
        {
            "text": "Kindness begins with the understanding that we all struggle.\n.\n#Repost @goodnewsnetwork with @make_repost\n・・・\nPrison Inmates Learned to Quilt and Now Make Amazing Personalized Gifts for Foster Care Children⁣\n⁣\nOver the past 10 years, more than 2,… https://t.co/G9RPLOhFaO https://t.co/ppGp5I2jpl",
            "id": "1455070067062972418",
            "lang": "en",
            "attachments": {
                "media_keys": [
                    "3_1455070065129365509"
                ]
            },
            "author_id": "2846844275"
        },
        {
            "text": "Frankie and Royce wed during the height of World War II. Not surprisingly, their no-frills wedding did not include a wedding photographer. On their 77-year anniversary, the Kings finally had their wedding photos taken, &amp; they are amazing: https://t.co/oiyysohQTP @goodnewsnetwork https://t.co/nPO0qfoe8p",
            "id": "1454933708587339782",
            "lang": "en",
            "attachments": {
                "media_keys": [
                    "3_1454933707287105539"
                ]
            },
            "author_id": "2165438024"
        },
        {
            "text": "RT @DanielleFong: the monarch butterflies are coming back !  https://t.co/vXUJRGkt5H\n\n@goodnewsnetwork https://t.co/yQP1Z14td7",
            "id": "1454927389142704128",
            "lang": "en",
            "attachments": {
                "media_keys": [
                    "3_1454863641661132804"
                ]
            },
            "author_id": "737376415"
        },
        {
            "text": "RT @DanielleFong: the monarch butterflies are coming back !  https://t.co/vXUJRGkt5H\n\n@goodnewsnetwork https://t.co/yQP1Z14td7",
            "id": "1454924762212356102",
            "lang": "en",
            "attachments": {
                "media_keys": [
                    "3_1454863641661132804"
                ]
            },
            "author_id": "1182585976645914624"
        },
        {
            "text": "RT @DanielleFong: the monarch butterflies are coming back !  https://t.co/vXUJRGkt5H\n\n@goodnewsnetwork https://t.co/yQP1Z14td7",
            "id": "1454864349823004674",
            "lang": "en",
            "attachments": {
                "media_keys": [
                    "3_1454863641661132804"
                ]
            },
            "author_id": "982824998904582144"
        },
        {
            "text": "the monarch butterflies are coming back !  https://t.co/vXUJRGkt5H\n\n@goodnewsnetwork https://t.co/yQP1Z14td7",
            "id": "1454863794522497027",
            "lang": "en",
            "attachments": {
                "media_keys": [
                    "3_1454863641661132804"
                ]
            },
            "author_id": "13232322"
        }
    ],
    "includes": {
        "media": [
            {
                "media_key": "3_1455595174848049163",
                "type": "photo",
                "url": "https://pbs.twimg.com/media/FDNQGXWXMAsZIeT.png"
            },
            {
                "media_key": "3_1455593301390790658",
                "type": "photo",
                "url": "https://pbs.twimg.com/media/FDNOZULWEAIje7C.jpg"
            },
            {
                "media_key": "3_1455320045735665664",
                "type": "photo",
                "url": "https://pbs.twimg.com/media/FDJV3viUYAA9hC9.png"
            },
            {
                "media_key": "3_1455070065129365509",
                "type": "photo",
                "url": "https://pbs.twimg.com/media/FDFyg9NXIAUV6fE.jpg"
            },
            {
                "media_key": "3_1454933707287105539",
                "type": "photo",
                "url": "https://pbs.twimg.com/media/FDD2f4qXEAMeCPR.jpg"
            },
            {
                "media_key": "3_1454863641661132804",
                "type": "photo",
                "url": "https://pbs.twimg.com/media/FDC2xh3X0AQwl8s.jpg"
            }
        ],
        "users": [
            {
                "id": "93952409",
                "name": "Cheryl Waixel Kaften",
                "username": "cherylwk1"
            },
            {
                "id": "159276989",
                "name": "Aftermath Services",
                "username": "Aftermath90"
            },
            {
                "id": "29775575",
                "name": "J P Fanton",
                "username": "HealthyFellow"
            },
            {
                "id": "915249063133622273",
                "name": "Foster Care Today",
                "username": "FosterCareToday"
            },
            {
                "id": "2846844275",
                "name": "Do Me a Favour Buddy",
                "username": "favorbuddy"
            },
            {
                "id": "2165438024",
                "name": "St. John's",
                "username": "StJohnsLiving"
            },
            {
                "id": "737376415",
                "name": "Stephanie P McKean",
                "username": "StephaniePMcKea"
            },
            {
                "id": "1182585976645914624",
                "name": "Apollonia",
                "username": "ApolloniaUSA"
            },
            {
                "id": "982824998904582144",
                "name": "Jester à la mode",
                "username": "JustMeTurtle"
            },
            {
                "id": "13232322",
                "name": "Danielle and 9 others",
                "username": "DanielleFong"
            }
        ]
    },
    "meta": {
        "newest_id": "1455595182536200196",
        "oldest_id": "1454863794522497027",
        "result_count": 10,
        "next_token": "b26v89c19zqg8o3fpdv7hdfqcb8s992rfhuecxs4kwewt"
    }
} */
