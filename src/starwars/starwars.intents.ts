import {
    DialogflowConversation
  } from 'actions-on-google'
import { messages, advises } from '../constants';

export const advise = (conv: DialogflowConversation) => {
    const rand = Math.floor(Math.random() * advises.length);
    conv.ask(advises[rand]);
}
export const defFengshui = (conv: DialogflowConversation) => {
    conv.ask(messages.def.fengshui);    
}

export const defKuaNumber = (conv: DialogflowConversation) => {
    conv.ask(messages.def.kuanumber);    
}
