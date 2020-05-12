import gql from 'graphql-tag';

// We disable linting for local fields because there is no way to add them to
// the fetched schema.
// https://github.com/apollographql/eslint-plugin-graphql/issues/99
/* eslint-disable graphql/template-strings */
export const GET_SUMMARY_LOCAL_DATA = gql`
    query getSummaryLocalData($cartId: String!) {
        cart(cart_id: $cartId) @connection(key: "Cart") {
            isBillingAddressSame @client
            paymentNonce @client
        }
    }
`;
/* eslint-enable graphql/template-strings */

export const GET_SUMMARY_DATA = gql`
    query getSummaryData($cartId: String!) {
        cart(cart_id: $cartId) @connection(key: "Cart") {
            id
            billingAddress: billing_address {
                firstName: firstname
                lastName: lastname
                country {
                    code
                }
                street
                city
                region {
                    code
                }
                postalCode: postcode
                phoneNumber: telephone
            }
            selected_payment_method {
                code
                title
            }
        }
    }
`;

export default {
    queries: {
        getSummaryData: GET_SUMMARY_DATA,
        getSummaryLocalData: GET_SUMMARY_LOCAL_DATA
    },
    mutations: {}
};
