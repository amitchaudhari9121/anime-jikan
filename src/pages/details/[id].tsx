import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DetailsContainer from "../../components/Details/detailsContainer";
import Layout from "../../components/Layout";
import { asyncDataAction } from "../../redux/actions/asyncDataAction";
import State from "../../types/state";
import { URL } from "../../utils/URLS";
const Details = () => {
  const { data } = useSelector((state: State) => state);
  const {
    query: { id },
  } = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      console.log("HEllog there marvelous id:" + id);
      const DETAILURL = URL.DETAILS + id;
      dispatch(asyncDataAction(DETAILURL));
    }
  }, [id]);

  return (
    <Layout title={data.results?.[0].title}>
      {data.results && <DetailsContainer id={id} data={data.results[0]} />}
    </Layout>
  );
};

export default Details;
