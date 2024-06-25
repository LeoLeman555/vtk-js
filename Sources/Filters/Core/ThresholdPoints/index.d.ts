declare const OperationType: Record<'Below' | 'Above', 'Below' | 'Above'>;

type Criteria = {
  arrayName: string;
  fieldAssociation: 'PointData' | 'Points';
  operation: 'Below' | 'Above';
  value: number;
};

declare function binarySearch(items: number[], value: number): { found: boolean; index: number; };

declare function camelize(str: string): string;

declare function vtkThresholdPoints(
  publicAPI: { [key: string]: any },
  model: { classHierarchy: string[]; criterias: Criteria[]; [key: string]: any }
): void;

declare function defaultValues(
  publicAPI: { [key: string]: any },
  model: { criterias: Criteria[]; [key: string]: any },
  initialValues?: Partial<{ criterias: Criteria[] }>
): { criterias: Criteria[] };

declare function extend(
  publicAPI: { [key: string]: any },
  model: { criterias: Criteria[]; [key: string]: any },
  initialValues?: Partial<{ criterias: Criteria[] }>
): void;

declare const newInstance: (extendFn: typeof extend, className: string) => any;

export {
  binarySearch,
  camelize,
  vtkThresholdPoints,
  defaultValues,
  extend,
  newInstance,
  OperationType,
};
