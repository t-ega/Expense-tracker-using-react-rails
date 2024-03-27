import {
    bitcoin, book, card, circle,
    clothing, food, freelance,
    medical, money, piggy, stocks, takeaway, tv, users, yt
} from './icons';

export const categoryIcon = (category) =>{

    switch(category) {
        case 'salary':
            return money;
        case 'freelancing':
            return freelance
        case 'investments':
            return stocks;
        case 'stocks':
            return users;
        case 'bitcoin':
            return bitcoin;
        case 'bank':
            return card;
        case 'youtube':
            return yt;
        case 'other':
            return piggy;
        default:
            return ''
    }
}

export const expenseCatIcon = (category) => {
    switch (category) {
        case 'education':
            return book;
        case 'groceries':
            return food;
        case 'health':
            return medical;
        case 'subscriptions':
            return tv;
        case 'takeaways':
            return takeaway;
        case 'clothing':
            return clothing;
        case 'travelling':
            return freelance;
        case 'other':
            return circle;
        default:
            return ''
    }
}