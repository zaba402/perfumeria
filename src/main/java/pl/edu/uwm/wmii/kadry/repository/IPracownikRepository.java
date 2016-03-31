package pl.edu.uwm.wmii.kadry.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import pl.edu.uwm.wmii.kadry.ob.PracownikOB;

/**
 * Created by wojciech.baczewski on 2016-03-29.
 */
public interface IPracownikRepository extends JpaRepository<PracownikOB, Long> {
}
