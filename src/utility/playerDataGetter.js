import axios from "axios";
import {gql, GraphQLClient} from "graphql-request";
import {floatTruncate, getParseColor} from "./parseUtilities";

//This will get the data for the given player and store it all in a very sexy redux store!!!!!
export const loadPlayerData = async (id, name, server, job, isTrial, addPlayer) => {
    getPlayerImage(name, server).then(link => {
        console.log(link)
        getPlayerParse(name, server, job).then(rankings => {
            storePlayerData(id, name, server, job, isTrial, link, rankings, addPlayer)
        });
    });
    /*
        let link = await getPlayerImage(name, server)
    console.log(link)
    getPlayerParse(name, server, job).then(rankings => {
        storePlayerData(id, name, server, job, isTrial, link, rankings, addPlayer)
    });
     */
}

function storePlayerData(id, name, server, job, isTrial, img, rankings, addPlayer){
    console.log("loading " + name + " data | link: " + img)
    let p1 = rankings.rankings[0].rankPercent == null? 0 : floatTruncate(rankings.rankings[0].rankPercent);
    let p2 = rankings.rankings[1].rankPercent == null? 0 : floatTruncate(rankings.rankings[1].rankPercent);
    let p3 = rankings.rankings[2].rankPercent == null? 0 : floatTruncate(rankings.rankings[2].rankPercent);
    let p4p1 = rankings.rankings[3].rankPercent == null? 0 : floatTruncate(rankings.rankings[3].rankPercent);
    let p4p2 = rankings.rankings[4].rankPercent == null? 0 : floatTruncate(rankings.rankings[4].rankPercent);
    addPlayer({
        id: id,
        name: name,
        server: server,
        region: "EU",
        job: job,
        link: img == null? "undefined" : img,
        isTrial: isTrial,
        parses: {
            p1: {
                parse: p1,
                color: getParseColor(p1)
            },
            p2: {
                parse: p2,
                color: getParseColor(p2)
            },
            p3: {
                parse: p3,
                color: getParseColor(p3)
            },
            p4p1: {
                parse: p4p1,
                color: getParseColor(p4p1)
            },
            p4p2: {
                parse: p4p2,
                color: getParseColor(p4p2)
            }
        }
    });
}

//This returns a simple link to the image
async function getPlayerImage(player, server) {
    let link = "https://xivapi.com/character/search?name=" + player.replace(' ', '+')
    + "&server=" + server + "&private_key=3675586e68a34b60a0ef60c02dee23a0c9621fbb8e9c49eba160781b5972d78c";
    let response = await axios(link);
    let data = await response.data;
    let results = data.Results;
    let portraitLink = Object.values(results[0])[0];
    link = portraitLink.replace('c0_96x96.jpg', 'l0_640x873.jpg');
    console.log(link)
    return link;
    /*
       .then(async response => {
        let data = await response.data;
        let results = data.Results;
        let portraitLink = Object.values(results[0])[0];
        link = portraitLink.replace('c0_96x96.jpg', 'l0_640x873.jpg');
        console.log(link)
        return link;
    });
     */
}

//This will return a javascript object straight from the graphQL query
async function getPlayerParse(player, server, job) {
    if(player != '') {
        const endpoint = "https://www.fflogs.com/api/v2/client"
        const client = new GraphQLClient(endpoint, {
            headers: {
                authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NWZmNGY0My03YzE4LTQwYjYtOTM0NS0yMzYxMzNmY2U5OTgiLCJqdGkiOiJiOTQxYjZlZTc5NDYzYWJmMmY0ZWUzMDdiNzU2ZDVlNzVmZTUyMDJmZjA1YzJkNzg2ZmI0MmYyNWFmMDM0OWUyMjBlNzRiOTc3ZTg1NDkxMyIsImlhdCI6MTY0OTI2MDg5Mi43OTk0MDcsIm5iZiI6MTY0OTI2MDg5Mi43OTk0MDksImV4cCI6MTY1OTYyODg5Mi43OTI1MSwic3ViIjoiIiwic2NvcGVzIjpbInZpZXctdXNlci1wcm9maWxlIiwidmlldy1wcml2YXRlLXJlcG9ydHMiXX0.KqhjXIqCGW1kVgMGJfXChjdU5XCQa--LxDatOFr_94Z8EzjtQOM_vX1btrztBbZ_o8YL6PAUflxgrlFyFP3wVahJNb0X_7a6sGcqhOT_ha3fkAx2i2wYnePIOGIvUqAUcgs2Qw5iAGvcBunMaa---ak2iGihR-gePaV3P5HWNaxATqeJbtBgVFTtH4NZewyxa10BKucr0f4tJYe2fqilnwAuWYOKzDQ8GqfNnGDfilLiIByK6NdzXpSdCjyYZixeWaOt8o3KAaRSCyNqfqym62zFo1NxEuAChSIqIDDWdanF7SCTTFrcXNXTsTz6gl3N8IliPTONoGdNA-cixWvJA71J_bbGwt3DOlNLz4iGHua3lLnLXloK2vcyXisy8o1UuLZOrjOJAfw0SbpFe20VcfFsUmdKpsovIvLTlbOItxH0DyUMRF3hANpWv2OzCdB9wNaVDxRwW0z97vfREg2b_u4SwcMEXKRvNGzVDmOzi6ol_bF0qkiavPBTXGUdVtha75gFQ61AXFlJcJF2OXpKq7474PYIVLcp2bHE3C8XG1-wzg7qv4MJof0cqqy2xwkTEiSu9JtwTN2G0mUFtelGKj3uMqtqB2Mr25QuE6mkqJHu-_krhytaJIsSBkZLWKBLCzn_Wz9Z7n8KiMTP5XZt9WMa8WlgRuJOinzfZLfhBr0',
            },
        })
        const query = gql`
        {
                characterData{
                    character(name: "${player}", serverSlug: "${server}", serverRegion: "EU") {
                        name,
                        zoneRankings(metric: rdps, specName: "${job}", timeframe: Historical)
                    }
                }
            }
        `
        const data = await client.request(query);
        return data.characterData.character.zoneRankings;
    }
}