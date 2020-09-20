package com.leapfinance.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.leapfinance.models.RequestResponseMapping;

/**
 * @author ashoka
 *
 */
@Repository
public interface RequestReponseMappingRepository extends PagingAndSortingRepository<RequestResponseMapping, Long> {

}
