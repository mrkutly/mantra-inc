import { select } from "@keystone-6/core/fields";
import { Group } from "../../types";

export const groupSelect = select({
  validation: { isRequired: true },
  isFilterable: true,
  isIndexed: true,
  options: [{
    value: Group.Mantra,
    label: 'Mantra',
  }, {
    value: Group.Recap,
    label: 'Recap',
  }, {
    value: Group.MantraYouth,
    label: 'Mantra Youth'
  }]
})