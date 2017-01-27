import {SEND_FORM, GET_FORM_DATA_START} from '../constants/actionTypes.constant';
import forEach from 'lodash/forEach';

export const sendForm = data => {
  /*
  Normalize data to backend format
   */
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

  return {
    type: SEND_FORM,
    data: result
  };
};

export const getFormData = () => {
  return {
    type: GET_FORM_DATA_START
  };
};
