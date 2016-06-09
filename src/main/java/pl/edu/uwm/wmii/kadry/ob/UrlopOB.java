package pl.edu.uwm.wmii.kadry.ob;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import pl.edu.uwm.wmii.domain.base.BaseOB;
import pl.edu.uwm.wmii.kadry.enums.ETypUrlopu;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
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
@Table(name = "URLOPY")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@SequenceGenerator(sequenceName = "URLOPY_SEQUENCE", name = "SEQUENCE")
public class UrlopOB extends BaseOB {
    private Integer iloscDni;
    private Integer urlopZalegly;
    private Integer pozostalyDoWykorzystania;
    private Integer dataOd;
    private Integer dataDo;
    private ETypUrlopu eTypUrlopu;
    @JoinColumn(name = "PRACOWNIK_ID")
    private PracownikOB pracownikOB;
}
