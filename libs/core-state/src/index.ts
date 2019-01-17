export { CoreStateModule } from './lib/core-state.module';

export { CustomersFacade } from './lib/state/customers/customers.facade';
export { ProjectsFacade } from './lib/state/projects/projects.facade';
export { SideloadFacade } from './lib/state/sideload/sideload.facade';

// Expose projects state
export { selectAllProjects, selectCurrentProject } from './lib/state';
export { ProjectsState, initialProjects } from './lib/state/projects/projects.reducer';
export { SelectProject, LoadProjects, AddProject, UpdateProject, DeleteProject } from './lib/state/projects/projects.actions';
