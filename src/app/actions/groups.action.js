import {SEND_FORM} from '../constants/actionTypes.constant';
import forEach from 'lodash/forEach';

export const sendForm = data => {
  const twitterMatchGroups = [];
  const instagramMatchGroups = [];

  forEach(data.groups, group => {
    const keywords = group.keywords || [];

    if (group.twitterMatchGroups) {
      const twitterMatchGroup = {
        name: group.name,
        influencers: group.twitterMatchGroups,
        keywords
      };
      twitterMatchGroups.push(twitterMatchGroup);
    }

    if (group.instagramMatchGroups) {
      const instagramMatchGroup = {
        name: group.name,
        influencers: group.instagramMatchGroups,
        keywords
      };
      instagramMatchGroups.push(instagramMatchGroup);
    }
  });
  const result = {
    twitterMatchGroups,
    instagramMatchGroups
  };
  const data2 = {
    twitterMatchGroups: [
      {
        name: "string",
        influencers: [
          "string2"
        ],
        keywords: [
          "string2"
        ]
      }
    ],
    instagramMatchGroups: [
      {
        name: "string",
        influencers: [
          "string3"
        ],
        keywords: [
          "string3"
        ]
      }
    ]
  };
  console.log(result);
  console.log(data2);

  return {
    type: SEND_FORM,
    data
  };
};
