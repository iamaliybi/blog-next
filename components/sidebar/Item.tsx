interface Props {
	label: string;
	children: any;
}

const SidebarItem: React.FC<Props> = ({ label, children }: Props) => {
	return (
		<div className="flex flex-col w-full overflow-hidden shadow-lg mb-8">
			<div className="bg-primary text-center rounded-t py-3">
				<h2 className="text-white font-medium text-sm uppercase">{label}</h2>
			</div>
			<div className="bg-white rounded-b p-6">
				{children}
			</div>
		</div>
	)
};

export default SidebarItem;