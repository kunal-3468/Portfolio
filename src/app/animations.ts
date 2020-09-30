import { trigger, transition, style, group, query, animateChild, animate } from '@angular/animations';

export const slideInAnimation =
  trigger('triggerName', [
    transition('contact => work, contact => skill, contact => academic, contact => about, contact => home, work => skill, work => academic, work => about, work => home, skill => academic, skill => about, skill => home, academic => about, academic => home, about => home', 
    [ style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [style({ transform: 'translateY(-100%)', opacity: 0 })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('1s ease-out', style({ transform: 'translateY(100%)', opacity: 0 }))]),
      query(':enter', [animate('1s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))])
     ]),
     query(':enter', animateChild())
    ]),
    transition('home => about, home => academic, home => skill, home => work, home => contact, about => academic, about => skill, about => work, about => contact, academic => skill, academic => work, academic => contact, skill => work, skill => contact, work => contact', 
    [ style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [style({ transform: 'translateY(100%)', opacity: 0 })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('1s ease-out', style({ transform: 'translateY(-100%)', opacity: 0 }))]),
      query(':enter', [animate('1s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))])
     ]),
     query(':enter', animateChild())
    ]),
  ]);