import loadable from '@loadable/component';

// Using loadable() instead of lazy() with Suspense
const DefComponent = loadable(() => import('./MyComponents'));

// If your Components are not export as default
const NameComponent1 = loadable(() => import('./MyComponents'), {
	resolveComponent: (components) => components.NameComponent1
});
// you can also make it more programmatic (any components can be import programmatically)
const NameComponent = loadable(() => import('./MyComponents'), {
	resolveComponent: (components, prop) =>
		components[`NameComponent${prop.index}`]
});

function App() {
	return (
		<div>
			<div>Product App Code Splitting with Loadable Component Library</div>
			<DefComponent />
			<NameComponent1 />
			<NameComponent index={1} />
			<NameComponent index={2} />
		</div>
	);
}

export default App;
