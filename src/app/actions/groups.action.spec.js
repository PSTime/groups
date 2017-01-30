import {GET_FORM_DATA_START, SEND_FORM} from '../constants/actionTypes.constant';
import {getFormData, sendForm, normalizeServerResponse} from './groups.action';

describe('groups actions', () => {
  it('sendForm should create GET_FORM_DATA_START action and normalize form data to backend format', () => {
    const data = {
      groups: [{
        instagramMatchGroups: ['string'],
        keywords: ['keywords'],
        name: 'name',
        twitterMatchGroups: ['stringt']
      },
      {
        instagramMatchGroups: ['string2'],
        keywords: ['keywords2'],
        name: 'name2',
        twitterMatchGroups: ['stringt2']
      }]
    };
    expect(sendForm(data)).toEqual({
      type: SEND_FORM,
      data: {
        instagramMatchGroups: [
          {
            influencers: ['string'],
            name: 'name',
            keywords: ['keywords']
          }, {
            influencers: ['string2'],
            name: 'name2',
            keywords: ['keywords2']
          }
        ],
        twitterMatchGroups: [
          {
            influencers: ['stringt'],
            name: 'name',
            keywords: ['keywords']
          }, {
            influencers: ['stringt2'],
            name: 'name2',
            keywords: ['keywords2']
          }
        ]
      }
    });
  });

  it('getFormData should create GET_FORM_DATA_START action', () => {
    expect(getFormData()).toEqual({
      type: GET_FORM_DATA_START
    });
  });

  it('normalizeServerResponse server response -> form data', () => {
    const data = {
      instagramMatchGroups: [
        {
          influencers: ['string'],
          name: 'name',
          keywords: ['keywords']
        }, {
          influencers: ['string2'],
          name: 'name2',
          keywords: ['keywords2']
        }
      ],
      twitterMatchGroups: [
        {
          influencers: ['stringt'],
          name: 'name',
          keywords: ['keywords']
        }, {
          influencers: ['stringt2'],
          name: 'name2',
          keywords: ['keywords2']
        }
      ]
    };
    expect(normalizeServerResponse(data)).toEqual({
      groups: [{
        instagramMatchGroups: ['string'],
        keywords: ['keywords'],
        name: 'name',
        twitterMatchGroups: ['stringt']
      },
      {
        instagramMatchGroups: ['string2'],
        keywords: ['keywords2'],
        name: 'name2',
        twitterMatchGroups: ['stringt2']
      }]
    });
  });
});

