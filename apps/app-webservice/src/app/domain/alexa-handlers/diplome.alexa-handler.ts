import { HandlerInput, RequestHandler } from 'ask-sdk-core';
import { Response } from 'ask-sdk-model';

const text = {
  intentName: "Diplome", // /!\ Malo: check the real intent value to match /!\
  speechText: "Voici les informations à propos du diplome.",
}

export class DiplomeAlexaHandler implements RequestHandler {
  canHandle(handlerInput: HandlerInput): boolean {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest' && request.intent.name === text.intentName;
  }

  handle(handlerInput: HandlerInput): Response {
    const speechText = text.speechText;

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard("", speechText)
      .withShouldEndSession(false)
      .getResponse();
  }
}
