package pl.edu.uwm.wmii.kadry.ob;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import pl.edu.uwm.wmii.domain.base.BaseOB;

import javax.persistence.Entity;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

/**
 * Created by wojciech.baczewski on 2016-04-17.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "KANDYDACI")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@SequenceGenerator(sequenceName = "KANDYDACI_SEQUENCE", name = "SEQUENCE")
public class KandydatOB extends BaseOB {
    private String imie;
    private String nazwisko;
}
