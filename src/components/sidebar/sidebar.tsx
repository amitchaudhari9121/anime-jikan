import { useState } from "react";
import { useSelector } from "react-redux";
import { CgMenuHotdog } from "react-icons/cg";
import Sidenav from "./sidenav";
import Search from "./search";
import Image from "next/image";
import Link from "next/link";
import State from "../../types/state";
interface ISidebarProps {
	visit: any;
}
const Sidebar = ({ visit }: ISidebarProps) => {
	const { theme } = useSelector((state: State) => state);
	const [show, setShow] = useState(false);

	return (
		<>
			<div
				style={{ height: "75px" }}
				className={`${theme.background} fixed w-full top-0 p-4 shadow-2xl  z-50 lg:shadow-none lg:p-8 lg:relative lg:bg-transparent`}
			>
				<Sidenav
					visit={visit}
					onClick={() => {
						setShow(false);
					}}
					show={show}
				/>

				<div
					id="sidemenu"
					className=" flex justify-center relative  w-full "
				>
					<Link href="/recentlyadded/1">
						<div
							className={`${theme.text.selected} lg:hidden absolute cursor-pointer`}
						>
							<Image
								width={1384.5}
								height={114}
								src={
									theme.theme == "dark"
										? "/anime-jikan-logo-dark-sidebar.svg"
										: "/anime-jikan-logo-light-sidebar.svg"
								}
							/>
						</div>
					</Link>
					<CgMenuHotdog
						size={35}
						onClick={() => {
							setShow(true);
						}}
						className={`${theme.button.background} cursor-pointer ${theme.button.text} absolute left-0 rounded-full p-1 lg:hidden `}
					/>
					<Search />
				</div>
			</div>
		</>
	);
};

export default Sidebar;
