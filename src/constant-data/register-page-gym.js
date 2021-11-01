export const GYM_BASIC_INFORMATION = [
  {   
    "name":"referenceCode",
    "inputType":"Input",
    "maxLength":75,
    "required":true,
    "label":"Reference Code",
    "type":"C",
  },
  {   
    "name":"name",
    "inputType":"Input",
    "maxLength":75,
    "required":true,
    "label":"Name",
    "type":"C",
  },
  {
    "name":"country",
    "inputType":"Input",
    "maxLength":75,
    "required":true,
    "label":"Country",
    "type":"C"
  },
  {
    "name":"postcode",
    "inputType":"Input",
    "maxLength":15,
    "required":true,
    "label":"Postcode",
    "type":"C"
  },
  {
    "name":"city",
    "inputType":"Input",
    "maxLength":100,
    "required":true,
    "label":"City",
    "type":"C"
  },
  {
    "name":"street",
    "inputType":"Input",
    "maxLength":75,
    "required":true,
    "label":"Street",
    "type":"C"
  },
  {
    "name":"streetNum",
    "inputType":"Input",
    "maxLength":10,
    "required":true,
    "label":"Street Number",
    "type":"C"
  },
  {
    "name":"floor",
    "inputType":"Input",
    "maxLength":10,
    "required":false,
    "label":"Floor",
    "type":"C"
  },
  {
    "name":"phoneNumber",
    "inputType":"Input",
    "maxLength":25,
    "required":true,
    "label":"Phone",
    "type":"P"
  },

  {
    "name":"description",
    "inputType":"Input",
    "maxLength":3500,
    "required":true,
    "label":"Description",
    "type":"C"
  },
  {
    "name":"shortDescription",
    "inputType":"Input",
    "maxLength":150,
    "required":true,
    "label":"Short Description",
    "type":"C"
  },
  {
    "name":"facebookUserId",
    "inputType":"Input",
    "maxLength":75,
    "required":false,
    "label":"Facebook",
    "type":"C"
  },
  {
    "name":"instagramUserId",
    "inputType":"Input",
    "maxLength":75,
    "required":false,
    "label":"Instagram",
    "type":"C"
  },
  {
    "name":"youtubeUserId",
    "inputType":"Input",
    "maxLength":75,
    "required":false,
    "label":"Youtube",
    "type":"C"
  },
  {
    "name":"twitterUserId",
    "inputType":"Input",
    "maxLength":75,
    "required":false,
    "label":"Twitter",
    "type":"C"
  },
  {
    "name":"webPageUserId",
    "inputType":"Input",
    "maxLength":75,
    "required":false,
    "label":"Website",
    "type":"C"
  },
];

export const GYM_OPENING_INFORMATION = [
  {
    "name":"mondayFrom",
    "inputType":"Number",
    "type":"T",
    "maxLength" : 5,
    "required":true,
    "label":"Monday from"
  },
  {
    "name":"mondayTo",
    "inputType":"Number",
    "type":"T",
    "maxLength" : 5,
    "required":true,
    "label":"Monday to",
  },
  {
    "name":"tuesdayFrom",
    "inputType":"Number",
    "type":"T",
    "maxLength" : 5,
    "required":true,
    "label":"Tuesday from",
  },
  {
    "name":"tuesdayTo",
    "inputType":"Number",
    "type":"T",
    "maxLength" : 5,
    "required":true,
    "label":"Tuesday to",
  },
  {
    "name":"wednesdayFrom",
    "inputType":"Number",
    "type":"T",
    "maxLength" : 5,
    "required":true,
    "label":"Wednesday from",
  },
  {
    "name":"wednesdayTo",
    "inputType":"Number",
    "type":"T",
    "maxLength" : 5,
    "required":true,
    "label":"Wednesday to",
  },
  {
    "name":"thursdayFrom",
    "inputType":"Number",
    "type":"T",
    "maxLength" : 5,
    "required":true,
    "label":"Thursday from",
  },
  {
    "name":"thursdayTo",
    "inputType":"Number",
    "type":"T",
    "maxLength" : 5,
    "required":true,
    "label":"Thursday to",
  },
  {
    "name":"fridayFrom",
    "inputType":"Number",
    "type":"T",
    "maxLength" : 5,
    "required":true,
    "label":"Friday from",
  },
  {
    "name":"fridayTo",
    "inputType":"Number",
    "type":"T",
    "maxLength" : 5,
    "required":true,
    "label":"Friday to",
  },
  {
    "name":"saturdayFrom",
    "inputType":"Number",
    "type":"T",
    "maxLength" : 5,
    "required":true,
    "label":"Saturday from",
  },
  {
    "name":"saturdayTo",
    "inputType":"Number",
    "type":"T",
    "maxLength" : 5,
    "required":true,
    "label":"Saturday to",
  },
  {
    "name":"sundayFrom",
    "inputType":"Number",
    "type":"T",
    "maxLength" : 5,
    "required":true,
    "label":"Sunday from",
  },
  {
    "name":"sundayTo",
    "inputType":"Number",
    "type":"T",
    "maxLength" : 5,
    "required":true,
    "label":"Sunday to",
  },
]