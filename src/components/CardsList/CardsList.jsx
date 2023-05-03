import React, { useEffect, useState } from "react";
import "./cardslist.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Card from "./Card/Card";

function CardsLists() {
  const [partnersData, setPartnersData] = useState([]);
  let { slug } = useParams();
  useEffect(() => {
    async function load(page = 2) {
      try {
        const {
          data: { data },
        } = await axios.get(`https://reqres.in/api/users?per_page=8`, {
          headers: {
            Accept: "application/json",
          },
        });

        setPartnersData(data);
        console.log(data);
        return data;
      } catch (error) {
        console.log(error);
      }
    }
    load();
  }, [slug]);

  return (
    <ul className="cards__list">
      {partnersData.map((data) => {
        console.log(data);
        return (
          <Link to={`/ourTeam/PartnerPage/${data.id}`} key={data.id}>
            <Card key={data.id} {...data} />
          </Link>
        );
      })}
    </ul>
  );
}

export default CardsLists;
