import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Card, DisplayText, ResourceList, Stack, TextStyle, Layout} from '@shopify/polaris';
import store from 'store-js';
import React, { useState } from "react";
import DayPicker from "react-day-picker";

import AhoraPicker from "./AhoraPicker";

import 'react-day-picker/lib/style.css';


const avai_dates = [
  {id: "gid://shopify/Collection/238139572412", day: 2},
  {id: "gid://shopify/Collection/238284079292", day: 4}
]

const GET_COLLECTION = gql`
  query getCollection($ids: [ID!]!) {
    nodes(ids: $ids) {
      ... on Product {
        id
        title
        variants(first: 1){
          edges {
            node {
              price
            }
          }
        }
        collections(first: 1) {
          edges {
            node {
              title
              id
            }
          }
        }
      }
    }
  }
`;

class GetCollectionByProductID extends React.Component {
  render() {
    return (
      <Query query={GET_COLLECTION} variables={{ ids: store.get('p_ids') }}>
        {({ data, loading, error }) => {
          if (loading) return <div>Loading…</div>;
          if (error) return <div>{error.message}</div>;

          var products = new Array(data.nodes.length);
          var i = 0;
          var prod_name = null;
          var coll_id = null;
          var coll_name = null;
          var prod_id = null;
          var prod_price = null;

          for (var line of data.nodes) {

            prod_id = null;
            prod_name = null;
            prod_price = null;
            coll_id = null;
            coll_name = null;

            prod_id = line.id;
            prod_name = line.title;
            for (var line3 of line.variants.edges) {
              prod_price = line3.node.price;
            }
            for (var line2 of line.collections.edges) {
              coll_id = line2.node.id;
              coll_name = line2.node.title;
              break;
            }

            products[i] = { prod_id, prod_name, prod_price, coll_id, coll_name };
            i++;
          }

          store.set('prod_selected', products);

          sortColl();
          setDate();

          store.set('p_ids', null);

          var days = store.get('days');

          const test = [];
          var arr = new Array;
          var toshow = 0;

          for (var day of days) {
            console.log(day);
            test.push(<AhoraPicker />);
          }



          return (

            <>

            <Card>
              <ResourceList
                resourceName={{ singular: 'Produit', plural: 'Produits' }}
                items={products}
                renderItem={item => {
                  const price = item.prod_price;
                  return (
                    <ResourceList.Item
                      id={item.prod_id}
                    >
                      <Stack>
                        <Stack.Item fill>
                          <h3>
                            <TextStyle variation="strong">
                              {item.prod_name}
                            </TextStyle>
                          </h3>
                        </Stack.Item>
                        <Stack.Item>
                          <p>{price} €</p>
                        </Stack.Item>
                      </Stack>
                    </ResourceList.Item>
                  );
                }}
              />

              {test}

            </Card>


            </>
          );
        }}
      </Query>
    );
  }
}

 export default GetCollectionByProductID;

 function sortColl() { //Tri les collections afin de ne pas avoir de doublon
   var products = store.get('prod_selected');
   var collections = new Array;
   var id = products[0].coll_id;
   var name = products[0].coll_name;
   var exists = false;
   var i = 1;

   collections[0] = { id, name };

   for (var line of products) {
     exists = false;
     for (var line2 of collections) {
       if (line.coll_id == line2.id) {
         exists = true;
         break;
       }
     }
     if (exists == false) {
       id = line.coll_id;
       name = line.coll_name;
       collections[i] = { id, name };
       i++;
     }
   }
   store.set('coll_selected', collections);
 }

 function setDate() {
   var tmp = new Array;
   var selection = store.get('coll_selected');

   var i = 0;
   for (var tofind of avai_dates) {
     for (var core of selection) {
       if (tofind.id == core.id) {
           tmp[tmp.length] = tofind.day;
           break;
       }
     }
   }
   store.set('days', tmp);
 }
