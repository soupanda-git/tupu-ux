import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { Project } from "src/app/models/Project";
import * as AppState from "../../state/app.state";
import * as ProjectActions from './project.actions'

export interface State extends AppState.State {
  projects: ProjectState
}

export interface ProjectState  {
  showProjectCode: boolean,
  currentProject: Project,
  projects: Project[]
}

const initialState: ProjectState = {
  showProjectCode:  true,
  currentProject: new Project(),
  projects: []
}

const getProjectFeatureState = createFeatureSelector<ProjectState>("projects");

export const getShowProjectCode = createSelector(
  getProjectFeatureState,
  state => state.showProjectCode
);

export const getCurrentProject = createSelector(
  getProjectFeatureState,
  state => state.currentProject
);

export const getProjects = createSelector(
  getProjectFeatureState,
  state => state.projects
);

export const projectReducer = createReducer<ProjectState>(
  initialState,
  on(ProjectActions.toggleShowProjectCode,
  (state): ProjectState => {
   // console.log(state);
    return {
       ...state,
       showProjectCode: !state.showProjectCode
    };
  }),
  on(ProjectActions.setCurrentProject, (state,action): ProjectState => {
    return {
      ...state,
      currentProject: action.project
    };
  }),
  on(ProjectActions.clearCurrentProject, (state): ProjectState =>{
    return {
      ...state,
      currentProject: new Project()
    };
  }),
  on(ProjectActions.initializeCurrentProject, (state): ProjectState => {
    return {
      ...state,
      currentProject: new Project()
    };
  })
);


