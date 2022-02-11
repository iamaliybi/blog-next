import About from "./About";
import Follow from "./Follow";
import Newsletter from "./Newsletter";

const Sidebar: React.FC = () => {
	return (
		<div className="xl:w-3/12 lg:w-4/12">
			<div style={{ position: 'sticky', top: '1.2rem' }} className="flex flex-col pl-4">
				<div className="no-scroll overflow-auto max-h-screen">
					<About />
					<Follow />
					<Newsletter />
				</div>
			</div>
		</div>
	)
};

export default Sidebar;