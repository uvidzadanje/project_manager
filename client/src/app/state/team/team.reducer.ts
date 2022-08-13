import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { Team } from "src/app/models/team";
import * as Actions from "./team.action";

export interface TeamState extends EntityState<Team> {
  selectedTeamId: number,
  nesto: Team
}

const adapter = createEntityAdapter<Team>();

export const initialState: TeamState = adapter.getInitialState({
  selectedTeamId: 0,
  nesto: {
    id: 0,
    name: "",
    teams: []
  }
});

export const teamReducer = createReducer(
  initialState,
  on(Actions.loadTeamsSusscess, (state, { teams }) =>
    adapter.setAll(teams, state)
  ),
  on(Actions.addTeamSuccess, (state, {team}) =>
    adapter.addOne(team, state)
  ),
  on(Actions.updateTeamSuccess, (state, {id, changes}) =>
    {
      console.log("bbbb"+" "+id);
      return adapter.updateOne(
        {
          id,
          changes
        },
        state
      )
    }
  ),
  on(Actions.deleteTeamSuccess, (state, {id}) =>
    adapter.removeOne(id, state)
  ),
  on(Actions.setSelectTeamId, (state, {id}) => {
    return {
      ...state,
      selectedTeamId: id
    }
  }),
  on(Actions.setItem, (state, {team}) => {
    return {
      ...state,
      nesto: team
    }
  })
)
