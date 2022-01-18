import React, { useEffect, useState } from "react";
import Description from "../component/description";
import { useAnimeDetails } from "../hooks";
import { DescriptionType } from "../lib/types";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

interface AnimeDetailProps {
  item: DescriptionType;
}

export interface SynopsisProps {}

const Synopsis: React.FunctionComponent<SynopsisProps> = (props) => {
  const [id, setId] = useState(Number);
  const [loading, setLoading] = useState(true);
  const animeId = parseInt(history.location.pathname.split("synopsis/")[1]);
  const { animeDetails }: any = useAnimeDetails(id);

  useEffect(() => {
    setId(animeId);
    setLoading(false);
  }, [animeId]);

  const AnimeDetails = ({ item }: AnimeDetailProps) => {
    return (
      <div style={{ margin: 10 }}>
        <Description
          synopsis={item.synopsis}
          title="Synopsis"
          image_url={item.image_url}
          scored_by={item.scored_by ? item.scored_by : 0}
          rank={item.rank}
          popularity={item.popularity}
          members={item.members}
          score={item.score ? item.score : 0}
        />
      </div>
    );
  };



  return (
    <div>
      {!loading && (
        <AnimeDetails item={animeDetails} />
      )}
    </div>
  );
};

export default Synopsis;
