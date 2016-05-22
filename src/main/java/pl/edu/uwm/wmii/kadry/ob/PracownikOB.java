package pl.edu.uwm.wmii.kadry.ob;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import pl.edu.uwm.wmii.domain.base.BaseOB;
import pl.edu.uwm.wmii.kadry.enums.EPlec;
import pl.edu.uwm.wmii.kadry.enums.EStanowisko;

import javax.persistence.*;
import java.time.ZonedDateTime;
import java.util.List;

/**
 * Created by wojciech.baczewski on 2016-03-29.
 */

@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "PRACOWNICY")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@SequenceGenerator(sequenceName = "PRACOWNICY_SEQUENCE", name = "SEQUENCE")
public class PracownikOB extends BaseOB {

    private String imie;
    private String nazwisko;
    private String pesel;
    private EStanowisko stanwisko;
    @OneToOne(fetch= FetchType.LAZY)
    @JoinColumn(name="UMOWA_ID")
    private UmowaOB umowa;
    @OneToOne(fetch= FetchType.LAZY)
    @JoinColumn(name="ADRES_ID")
    private AdresOB adres;
    //    private List<EPrawoJazdy> kategoriePrawaJazdy;
    private ZonedDateTime dataUrodzenia;
    private ZonedDateTime dataZatrudnienia;
    private EPlec plec;
    private boolean status;
    private String telPrefix;
    private String telNumer;
    @OneToMany(mappedBy = "pracownikOB")
    private List<UrlopOB> urlop;
    @OneToMany(mappedBy = "pracownik")
    private List<UmiejetnoscOB> umiejetnosci;
    @OneToMany(mappedBy = "prac")
    private List<SzkolenieOB> szkolenia;
    private StanowiskoOB stanowisko;
    private WyksztalcenieOB wyksztalcenie;
    private PensjaOB pensja;

}
