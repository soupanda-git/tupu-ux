import { createAction, props } from "@ngrx/store";
import { Project } from "src/app/models/Project";

export const toggleShowProjectCode = createAction('[Project] Toggle Show Project Code');

export const setCurrentProject = createAction(
    '[Project] Set Current Project',
    props<{project: Project}>()
);

export const initializeCurrentProject = createAction('[Project] Initialize Current Project');

export const clearCurrentProject = createAction('[Project] Clear Current Project');


