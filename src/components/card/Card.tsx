import styled from "styled-components";
import { useSelector } from "react-redux";
import Link from "next/link";
import { AiFillCalendar } from "react-icons/ai";
import State from "../../types/state";

interface MovieWrapper {
  card: any; //<-- TODO: FIX this.
}

const MovieWrapper = styled.a<MovieWrapper>`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  border-radius: 0.8rem;
  background-color: transparent;
  transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover {
    transform: scale(1.03);
    color: ${({ card }) => {
      return card.texthover;
    }};
    ::after {
      transform: scaleY(1);
      opacity: 1;
    }
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0.8rem;
    transform: scaleY(0);
    transform-origin: top;
    background-color: ${({ card }) => card.bghover};

    opacity: 0;
    z-index: -99;
    box-shadow: 0rem 2rem 5rem rgba(0, 0, 0, 0.2);
    transition: all 100ms cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`;

const MovieImg = styled.img`
  width: 100%;
  object-fit: "cover";
  border-radius: 0.8rem;
  box-shadow: 0rem 2rem 5rem rgba(0, 0, 0, 0.2);
  transition: all 100ms cubic-bezier(0.645, 0.045, 0.355, 1);
  ${MovieWrapper}:hover & {
    border-radius: 0.8rem 0.8rem 0rem 0rem;
    box-shadow: none;
  }
`;

const Title = styled.span`
  text-align: center;
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
interface IcardProps {
  title: string;
  id: number;
  heading: string;
  image: string;
  episodenumber: number;
}
const Card = ({ title, id, heading, image, episodenumber }: IcardProps) => {
  const theme = useSelector((state: State) => state.theme);
  return (
    <Link
      href={
        episodenumber ? `/watching/${id}/${episodenumber}` : `/details/${id}`
      }
    >
      <MovieWrapper
        className={`relative ${theme.card.text} ${theme.card.bghover} cursor-pointer items-center rounded-xl w-full text-center justify-start flex flex-col  `}
        card={theme.card}
      >
        <MovieImg
          className="w-full object-cover rounded-xl h-60 xl:h-96 md:h-72 lg:h-80"
          src={image}
          loading="lazy"
          alt={title}
        />
        {heading == "Recently Added" ? (
          <span className="absolute left-0 top-0 p-2 ">
            <AiFillCalendar size={15} className={"text-blue-500"} />
          </span>
        ) : null}
        <DetailsWrapper>
          <Title className="text-lg w-full h-1/6  p-4">{title}</Title>
        </DetailsWrapper>
      </MovieWrapper>
    </Link>
  );
};

export default Card;
