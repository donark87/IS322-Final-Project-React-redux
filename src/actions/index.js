export const deposit = (_id, amount) => {
    return {
        type: 'DEPOSIT_MONEY',
        payload: {
            _id, amount
        }
    };
};
export const withdraw = (_id, amount) => {
    return {
        type: 'WITHDRAW_MONEY',
        payload: {
            _id, amount
        }
    };
};
export const newAccount = (name,amount) => {
    return{
        type: 'ADD_NEW_ACCOUNT',
        payload: {
            name,amount
        }
    };
};