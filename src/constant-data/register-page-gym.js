export const GYM_BASIC_INFORMATION = [
  {   
    "name":"referenceCode",
    "inputType":"Input",
    "maxLength":75,
    "required":true,
    "label":"Reference Code",
    "type": "text",
  },
  {   
    "name":"name",
    "inputType":"Input",
    "maxLength":75,
    "required":true,
    "label":"Name",
    "type": "text",
  },
  {
    "name":"country",
    "inputType":"Input",
    "maxLength":75,
    "required":true,
    "label":"Country",
    "type": "text"
  },
  {
    "name":"postcode",
    "inputType":"Input",
    "maxLength":15,
    "required":true,
    "label":"Postcode",
    "type": "text"
  },
  {
    "name":"city",
    "inputType":"Input",
    "maxLength":100,
    "required":true,
    "label":"City",
    "type": "text"
  },
  {
    "name":"street",
    "inputType":"Input",
    "maxLength":75,
    "required":true,
    "label":"Street",
    "type": "text"
  },
  {
    "name":"streetNum",
    "inputType":"Input",
    "maxLength":10,
    "required":true,
    "label":"Street Number",
    "type": "text"
  },
  {
    "name":"floor",
    "inputType":"Input",
    "maxLength":10,
    "required":false,
    "label":"Floor",
    "type": "text"
  },
  {
    "name":"phoneNumber",
    "inputType":"Input",
    "maxLength":25,
    "required":true,
    "label":"Phone",
    "type": "text"
  },

  {
    "name":"description",
    "inputType":"Input",
    "maxLength":3500,
    "required":true,
    "label":"Description",
    "type": "text"
  },
  {
    "name":"shortDescription",
    "inputType":"Input",
    "maxLength":150,
    "required":true,
    "label":"Short Description",
    "type": "text"
  },
  {
    "name":"facebookUserId",
    "inputType":"Input",
    "maxLength":75,
    "required":false,
    "label":"Facebook",
    "type": "text"
  },
  {
    "name":"instagramUserId",
    "inputType":"Input",
    "maxLength":75,
    "required":false,
    "label":"Instagram",
    "type": "text"
  },
  {
    "name":"youtubeUserId",
    "inputType":"Input",
    "maxLength":75,
    "required":false,
    "label":"Youtube",
    "type": "text"
  },
  {
    "name":"twitterUserId",
    "inputType":"Input",
    "maxLength":75,
    "required":false,
    "label":"Twitter",
    "type": "text"
  },
  {
    "name":"webPageUserId",
    "inputType":"Input",
    "maxLength":75,
    "required":false,
    "label":"Website",
    "type": "text"
  },
];

export const GYM_OPENING_INFORMATION = [
  {
    "name":"mondayFrom",
    "inputType":"Number",
    "type": "time",
    "maxLength" : 5,
    "required":true,
    "label":"Monday from"
  },
  {
    "name":"mondayTo",
    "inputType":"Number",
    "type": "time",
    "maxLength" : 5,
    "required":true,
    "label":"Monday to",
  },
  {
    "name":"tuesdayFrom",
    "inputType":"Number",
    "type": "time",
    "maxLength" : 5,
    "required":true,
    "label":"Tuesday from",
  },
  {
    "name":"tuesdayTo",
    "inputType":"Number",
    "type": "time",
    "maxLength" : 5,
    "required":true,
    "label":"Tuesday to",
  },
  {
    "name":"wednesdayFrom",
    "inputType":"Number",
    "type": "time",
    "maxLength" : 5,
    "required":true,
    "label":"Wednesday from",
  },
  {
    "name":"wednesdayTo",
    "inputType":"Number",
    "type": "time",
    "maxLength" : 5,
    "required":true,
    "label":"Wednesday to",
  },
  {
    "name":"thursdayFrom",
    "inputType":"Number",
    "type": "time",
    "maxLength" : 5,
    "required":true,
    "label":"Thursday from",
  },
  {
    "name":"thursdayTo",
    "inputType":"Number",
    "type": "time",
    "maxLength" : 5,
    "required":true,
    "label":"Thursday to",
  },
  {
    "name":"fridayFrom",
    "inputType":"Number",
    "type": "time",
    "maxLength" : 5,
    "required":true,
    "label":"Friday from",
  },
  {
    "name":"fridayTo",
    "inputType":"Number",
    "type": "time",
    "maxLength" : 5,
    "required":true,
    "label":"Friday to",
  },
  {
    "name":"saturdayFrom",
    "inputType":"Number",
    "type": "time",
    "maxLength" : 5,
    "required":true,
    "label":"Saturday from",
  },
  {
    "name":"saturdayTo",
    "inputType":"Number",
    "type": "time",
    "maxLength" : 5,
    "required":true,
    "label":"Saturday to",
  },
  {
    "name":"sundayFrom",
    "inputType":"Number",
    "type": "time",
    "maxLength" : 5,
    "required":true,
    "label":"Sunday from",
  },
  {
    "name":"sundayTo",
    "inputType":"Number",
    "type": "time",
    "maxLength" : 5,
    "required":true,
    "label":"Sunday to",
  },
]

export const GYM_PRICING_INFORMATION = [
  {
    "name":"categoryType",
    "inputType":"Input",
    "maxLength":100,
    "required":false,
    "label":"Category Type",
    "type": "text"
  },  
  {
    "name":"ticketType",
    "inputType":"Input",
    "maxLength":100,
    "required":false,
    "label":"Ticket Type",
    "type": "text"
  },  
  {
    "name":"amount",
    "inputType":"Input",
    "maxLength":10,
    "required":false,
    "label":"Price",
    "type": "number"
  },  
  {
    "name":"currency",
    "inputType":"Input",
    "maxLength":3,
    "required":false,
    "label":"Currency",
    "type": "text"
  }, 
  {
    "name":"validForDays",
    "inputType":"Input",
    "maxLength":3,
    "required":false,
    "label":"Valid for days",
    "type": "number"
  }, 
]