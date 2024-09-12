import { SelectQueryBuilder } from 'typeorm';

/**
 * Apply filters to a query builder based on provided filters and valid filter fields.
 * @param queryBuilder - The TypeORM query builder to which filters will be applied.
 * @param filter - The filters object containing filter key-value pairs.
 * @param validFilters - An array of valid filter fields for the query.
 */
export function applyFilters(
  queryBuilder: SelectQueryBuilder<any>,
  filter: { [key: string]: any },
  validFilters: string[]
): void {
  // Apply the provided filters
  for (const [key, value] of Object.entries(filter)) {
    if (validFilters.includes(key) && value !== undefined) {
      if (typeof value === 'boolean') {
        // Use '=' for boolean values
        queryBuilder.andWhere(`${queryBuilder.alias}.${key} = :${key}`, { [key]: value });
      } else if (typeof value === 'string') {
        // Use 'LIKE' for string values
        queryBuilder.andWhere(`${queryBuilder.alias}.${key} LIKE :${key}`, { [key]: `%${value}%` });
      } else if (typeof value === 'number') {
        // Use '=' for number values
        queryBuilder.andWhere(`${queryBuilder.alias}.${key} = :${key}`, { [key]: value });
      }
    }
  }

  // Add a condition to filter out deleted records
  queryBuilder.andWhere(`${queryBuilder.alias}.delete_flag = :delete_flag`, { delete_flag: false });

  // Order by 'id' in ascending order
  
}
