// Loading Named Exports with Loadable Components
export const NameComponent1 = () => <div>NameComponent1</div>;
export const NameComponent2 = () => <div>NameComponent2</div>;

// Loading Default Exports with Loadable Components
const DefComponent = () => {
	return <div>Def Component</div>;
};
export default DefComponent;
