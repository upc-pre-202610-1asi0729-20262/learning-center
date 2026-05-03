import { Injectable } from '@angular/core';
import { BaseApi } from '../../shared/infrastructure/base-api';
import { CategoriesApiEndpoint } from './categories-api-endpoint';
import { HttpClient } from '@angular/common/http';
import { Category } from '../domain/model/category.entity';
import { Observable } from 'rxjs';
import { CoursesApiEndpoint } from './courses-api-endpoint';
import { Course } from '../domain/model/couse.entity';

/**
 * Infrastructure facade exposing Learning bounded-context endpoint operations.
 */
@Injectable({ providedIn: 'root' })
export class LearningApi extends BaseApi {
  private readonly categoriesEndpoint: CategoriesApiEndpoint;
  private readonly coursesEndpoint: CoursesApiEndpoint;

  constructor(http: HttpClient) {
    super();
    this.coursesEndpoint = new CoursesApiEndpoint(http);
    this.categoriesEndpoint = new CategoriesApiEndpoint(http);
  }

  /**
   * Retrieves all courses.
   * @returns Stream with the course collection.
   */
  getCourses(): Observable<Course[]> {
    return this.coursesEndpoint.getAll();
  }

  /**
   * Retrieves a single course by ID.
   * @param id - The ID of the course.
   * @returns An Observable of the Course object.
   */
  getCourse(id: number): Observable<Course> {
    return this.coursesEndpoint.getById(id);
  }

  /**
   * Creates a new course.
   * @param course - The course to create.
   * @returns An Observable of the created Course object.
   */
  createCourse(course: Course): Observable<Course> {
    return this.coursesEndpoint.create(course);
  }

  /**
   * Updates an existing course.
   * @param course - The course to update.
   * @returns An Observable of the updated Course object.
   */
  updateCourse(course: Course): Observable<Course> {
    return this.coursesEndpoint.update(course, course.id);
  }

  /**
   * Deletes a course by ID.
   * @param id - The ID of the course to delete.
   * @returns An Observable of void.
   */
  deleteCourse(id: number): Observable<void> {
    return this.coursesEndpoint.delete(id);
  }

  /**
   * Retrieves all categories.
   * @returns Stream with the category collection.
   */
  getCategories(): Observable<Category[]> {
    return this.categoriesEndpoint.getAll();
  }

  /**
   * Retrieves a single category by ID.
   * @param id - Category identifier.
   * @returns Stream with the selected category.
   */
  getCategory(id: number): Observable<Category> {
    return this.categoriesEndpoint.getById(id);
  }

  /**
   * Creates a new category.
   * @param category - Category entity to persist.
   * @returns Stream with the created category.
   */
  createCategory(category: Category) {
    return this.categoriesEndpoint.create(category);
  }

  /**
   * Updates an existing category.
   * @param category - Category entity carrying updated values.
   * @returns Stream with the updated category.
   */
  updateCategory(category: Category): Observable<Category> {
    return this.categoriesEndpoint.update(category, category.id);
  }

  /**
   * Deletes a category by identifier.
   * @param id - Category identifier.
   * @returns Completion stream.
   */
  deleteCategory(id: number): Observable<void> {
    return this.categoriesEndpoint.delete(id);
  }
}
