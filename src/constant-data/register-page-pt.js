export const PT_GENERAL_INFORMATION = {
  "personalTrainer": [
    {
      "value": "firstName",
      "inputType": "Input",
      "maxLength": 75,
      "required": true,
      "label": "First name",
      "type": "C",
    },
    {
      "value": "lastName",
      "inputType": "Input",
      "maxLength": 75,
      "required": true,
      "label": "Last name",
      "type": "C",
    },
    {
      "value": "email",
      "inputType": "Input",
      "maxLength": 100,
      "required": false,
      "label": "Email",
      "type": "C",
    },
    {
      "value": "phoneNumber",
      "inputType": "Input",
      "maxLength": 25,
      "required": false,
      "label": "Phone number",
      "type": "C",
    },
    {
      "value": "languageCodes",
      "inputType": "Dropdown",
      "maxLength": 75,
      "required": true,
      "label": "Spoken languages",
      "type": "C",
    },
    {
      "value": "description",
      "inputType": "Input",
      "maxLength": 3500,
      "required": true,
      "label": "Description",
      "type": "C",
    },

    {
      "value": "shortDescription",
      "inputType": "Input",
      "maxLength": 150,
      "required": true,
      "label": "Short description",
      "type": "C",
    },
    {
      "value": "facebookUserId",
      "inputType": "Input",
      "maxLength": 100,
      "required": false,
      "label": "Facebook user id",
      "type": "C",
    },
    {
      "value": "instagramUserId",
      "inputType": "Input",
      "maxLength": 100,
      "required": false,
      "label": "Instagram user id",
      "type": "C",
    },
    {
      "value": "twitterUserId",
      "inputType": "Input",
      "maxLength": 100,
      "required": false,
      "label": "Facebook user id",
      "type": "C",
    },
    {
      "value": "youtubeUserId",
      "inputType": "Input",
      "maxLength": 100,
      "required": false,
      "label": "Facebook user id",
      "type": "C",
    },
    {
      "value": "webPageUserId",
      "inputType": "Input",
      "maxLength": 100,
      "required": false,
      "label": "Facebook user id",
      "type": "C",
    },
  ]
}


export const PT_PRICING_INFORMATION = [
  {
    "name": "categoryType",
    "inputType": "Input",
    "maxLength": 100,
    "required": false,
    "label": "Category Type",
    "type": "text"
  },
  {
    "name": "ticketType",
    "inputType": "Input",
    "maxLength": 100,
    "required": false,
    "label": "Ticket Type",
    "type": "text"
  },
  {
    "name": "amount",
    "inputType": "Input",
    "maxLength": 10,
    "required": false,
    "label": "Price",
    "type": "number"
  },
  {
    "name": "currency",
    "inputType": "Input",
    "maxLength": 3,
    "required": false,
    "label": "Currency",
    "type": "text"
  },
  {
    "name": "validForDays",
    "inputType": "Input",
    "maxLength": 3,
    "required": false,
    "label": "Valid for days",
    "type": "number"
  },
]