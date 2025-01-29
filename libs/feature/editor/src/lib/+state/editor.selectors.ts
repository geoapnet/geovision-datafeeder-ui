import { createFeatureSelector, createSelector } from '@ngrx/store'
import { EDITOR_FEATURE_KEY, EditorState } from './editor.reducer'
import { EditorSectionWithValues } from './editor.models'

export const selectEditorState =
  createFeatureSelector<EditorState>(EDITOR_FEATURE_KEY)

export const selectRecord = createSelector(
  selectEditorState,
  (state: EditorState) => state.record
)

export const selectRecordSource = createSelector(
  selectEditorState,
  (state: EditorState) => state.recordSource
)

export const selectRecordSaving = createSelector(
  selectEditorState,
  (state: EditorState) => state.saving
)

export const selectRecordSaveError = createSelector(
  selectEditorState,
  (state: EditorState) => state.saveError
)

export const selectRecordChangedSinceSave = createSelector(
  selectEditorState,
  (state: EditorState) => state.changedSinceSave
)

export const selectRecordAlreadySavedOnce = createSelector(
  selectEditorState,
  (state: EditorState) => state.alreadySavedOnce
)

export const selectEditorConfig = createSelector(
  selectEditorState,
  (state: EditorState) => state.editorConfig
)

export const selectCurrentPage = createSelector(
  selectEditorState,
  (state: EditorState) => state.currentPage
)

export const selectRecordSections = createSelector(
  selectEditorState,
  (state: EditorState) => {
    const currentPage = state.editorConfig.pages[state.currentPage]
    if (!currentPage) {
      return [] as EditorSectionWithValues[]
    }
    return currentPage.sections.map((section) => ({
      ...section,
      fieldsWithValues: section.fields.map((fieldConfig) => ({
        config: fieldConfig,
        value: state.record?.[fieldConfig.model] ?? null,
      })),
    })) as EditorSectionWithValues[]
  }
)

export const selectHasRecordChanged = createSelector(
  selectEditorState,
  (state: EditorState) => state.hasRecordChanged
)

export const selectSavedButNotPublished = createSelector(
  selectEditorState,
  (state: EditorState) => state.savedButNotPublished
)
