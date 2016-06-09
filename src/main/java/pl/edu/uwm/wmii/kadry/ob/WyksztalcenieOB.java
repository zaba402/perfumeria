package pl.edu.uwm.wmii.kadry.ob;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import pl.edu.uwm.wmii.domain.base.BaseOB;
import pl.edu.uwm.wmii.kadry.enums.EWyksztalcenie;

import javax.persistence.Entity;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import java.time.ZonedDateTime;

/**
 * Created by wojciech.baczewski on 2016-04-17.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "WYKSZTALCENIA")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@SequenceGenerator(sequenceName = "WYKSZTALCENIA_SEQUENCE", name = "SEQUENCE")
public class WyksztalcenieOB extends BaseOB {
    private EWyksztalcenie typ;
    private String nazwaUczelni;
    private ZonedDateTime dataUkonczenia;
}
