import {SEND_FORM, GET_FORM_DATA_START} from '../constants/actionTypes.constant';
import forEach from 'lodash/forEach';
import findIndex from 'lodash/findIndex';
import uniq from 'lodash/uniq';

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

export const normalizeServerResponse = response => {
  const data = [];
  if (response.twitterMatchGroups) {
    forEach(response.twitterMatchGroups, tw => {
      const one = {
        twitterMatchGroups: tw.influencers,
        name: tw.name,
        keywords: tw.keywords
      };
      data.push(one);
    });
  }
  if (response.instagramMatchGroups) {
    forEach(response.instagramMatchGroups, ins => {
      const index = findIndex(data, d => d.name === ins.name);
      if (index > -1) {
        data[index].instagramMatchGroups = ins.influencers;
        data[index].keywords = uniq([...data[index].keywords, ...ins.keywords]);
      } else {
        const one = {
          instagramMatchGroups: ins.influencers,
          name: ins.name,
          keywords: ins.keywords
        };
        data.push(one);
      }
    });
  }
  const result = {groups: data};
  return result;
};
