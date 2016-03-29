package pl.edu.uwm.wmii.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import pl.edu.uwm.wmii.domain.PracownikOB;

/**
 * Created by wojciech.baczewski on 2016-03-29.
 */
public interface PracownikRepository extends PagingAndSortingRepository<PracownikOB, Long> {
}
