package pl.edu.uwm.wmii.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import pl.edu.uwm.wmii.domain.base.BaseOB;
import pl.edu.uwm.wmii.domain.enums.ERodzajUmowy;

import javax.persistence.Entity;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import java.time.ZonedDateTime;

/**
 * Created by wojciech.baczewski on 2016-03-29.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "UMOWY")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@SequenceGenerator(sequenceName = "UMOWY_SEQUENCE", name = "SEQUENCE")
public class UmowaOB extends BaseOB{
    private ZonedDateTime dataRozpoczecia;
    private ZonedDateTime dataZakonczenia;
    private Double stawkaGodzinowa;
    private ERodzajUmowy eRodzajUmowy;
}
